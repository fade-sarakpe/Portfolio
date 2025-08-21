// For Fix Error ((Could not find a declaration file for module 'react-typewriter-effect'))
declare module "react-typewriter-effect" {
    import * as React from "react";
  
    interface TypeWriterEffectProps {
      textStyle?: React.CSSProperties;
      startDelay?: number;
      cursorColor?: string;
      multiText?: string[];
      multiTextDelay?: number;
      typeSpeed?: number;
      deleteSpeed?: number;
      multiTextLoop?: boolean;
    }
  
    const TypeWriterEffect: React.FC<TypeWriterEffectProps>;
    export default TypeWriterEffect;
  }
  