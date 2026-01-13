import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundFlare = () => {
  const { scrollYProgress } = useScroll();
  
  // 1. Vertical Position: Moves the wave down the page as you scroll
  const yBase = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  // 2. The Wave Undulation: Moves the line up and down locally to create the "Ocean" feel
  // We use multiple points to create the "S" curve (0 -> -50 -> 50 -> 0)
  const waveMovement = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [0, -60, 60, -60, 60, 0] 
  );

  // 3. Rotation: Tilts the "nose" of the wave up and down as it rolls
  const tilt = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -10, 10, -10, 10, 0]
  );

  const terms = ["SCIKIT-LEARN", "μ = 0.95", "PANDA_DF", "XGBOOST", "0x1A4", "Σ_DATA"];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-background">
      {/* The Waving Ribbon */}
      <motion.div 
        style={{ y: yBase, translateY: waveMovement, rotate: tilt }}
        className="absolute left-[-50%] w-[200%] h-24 flex items-center opacity-35"
      >
        <img 
          src="/DataSwoosh.svg" 
          className="w-full h-auto" 
          alt="ocean-wave-code" 
        />
      </motion.div>

      {/* Floating spinny bits */}
      {terms.map((term, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-[10px] text-primary/80 font-bold"
          initial={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh` }}
          animate={{
            y: [null, `${Math.random() * 100}vh`],
            rotate: [0, 360]
          }}
          transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
        >
          {term}
        </motion.span>
      ))}
    </div>
  );
};

export default BackgroundFlare;