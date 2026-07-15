import { useEffect, useRef } from "react";

export const useAudioVisualizer = (
  audioRef: React.RefObject<HTMLAudioElement>,
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number>(null);

  useEffect(() => {
    if (!audioRef.current || !containerRef.current) return;

    const audio = audioRef.current;

    const setupAudio = () => {
      if (!audioContextRef.current) {
        // Initialize Web Audio API
        const AudioContext =
          window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;

        // Prevent attaching the source node multiple times (which causes errors)
        if (!sourceRef.current) {
          sourceRef.current =
            audioContextRef.current.createMediaElementSource(audio);
          sourceRef.current.connect(analyserRef.current);
          analyserRef.current.connect(audioContextRef.current.destination);
        }
      }

      // Browsers suspend audio context until user interaction
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }
    };

    const update = () => {
      if (analyserRef.current && containerRef.current) {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);

        // Calculate average volume
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const average = sum / dataArray.length;

        // Normalize to a value roughly between 0 and 1
        const volume = Math.min(average / 150, 1);

        // Inject high-performance CSS variable directly to the container
        containerRef.current.style.setProperty(
          "--audio-vol",
          volume.toString(),
        );
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    // Attach setup to the play event to ensure user interaction has occurred
    audio.addEventListener("play", setupAudio);
    audio.addEventListener("play", update);
    audio.addEventListener("pause", () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      // Reset the visual variable when paused
      if (containerRef.current)
        containerRef.current.style.setProperty("--audio-vol", "0");
    });

    return () => {
      audio.removeEventListener("play", setupAudio);
      audio.removeEventListener("play", update);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [audioRef]);

  return containerRef;
};
