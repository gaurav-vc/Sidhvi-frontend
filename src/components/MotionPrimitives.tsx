import React from 'react';
import {
  MotionConfig,
  motion,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'motion/react';

export const EASE_SETTLE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#1FADE4] via-[#1F2A5C] to-[#E31E24]"
    />
  );
};

interface RevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 20,
  duration = 0.55,
  className = '',
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration, delay, ease: EASE_SETTLE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.055,
  className = '',
  ...rest
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  y?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  y = 18,
  ...rest
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE_SETTLE },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
