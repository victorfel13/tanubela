import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

const SPARKLE_PATH =
  "M12 1.2 13.35 8.65 20.8 10 13.35 11.35 12 18.8 10.65 11.35 3.2 10 10.65 8.65 12 1.2Z";

type SparkleIconProps = {
  size?: number | string;
  color?: string;
  opacity?: number;
  sx?: SxProps<Theme>;
};

export function SparkleIcon({
  size = 16,
  color = "#fff",
  opacity = 1,
  sx,
}: SparkleIconProps) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden
      sx={{
        display: "block",
        width: size,
        height: size,
        flexShrink: 0,
        opacity,
        ...sx,
      }}
    >
      <path fill={color} d={SPARKLE_PATH} />
    </Box>
  );
}

type SparkleSpec = {
  scale: number;
  opacity?: number;
  variant?: "star" | "dot";
};

const decorPresets = {
  banner: [
    { scale: 0.42, opacity: 0.72, variant: "dot" },
    { scale: 1, opacity: 1 },
    { scale: 0.55, opacity: 0.88, variant: "dot" },
    { scale: 0.9, opacity: 0.96 },
    { scale: 0.38, opacity: 0.62, variant: "dot" },
    { scale: 1.05, opacity: 1 },
    { scale: 0.48, opacity: 0.78, variant: "dot" },
  ] satisfies SparkleSpec[],
  compact: [
    { scale: 0.45, opacity: 0.7, variant: "dot" },
    { scale: 1, opacity: 1 },
    { scale: 0.5, opacity: 0.75, variant: "dot" },
  ] satisfies SparkleSpec[],
} as const;

type SparkleDecorProps = {
  variant?: keyof typeof decorPresets;
  baseSize?: number | { xs?: number; sm?: number; md?: number };
};

export function SparkleDecor({
  variant = "banner",
  baseSize = { xs: 14, md: 16 },
}: SparkleDecorProps) {
  const specs = decorPresets[variant];

  return (
    <Box
      aria-hidden
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: { xs: "0.42em", md: "0.55em" },
        fontSize: baseSize,
        lineHeight: 0,
        flexShrink: 0,
        maxWidth: variant === "banner" ? "min(52vw, 280px)" : undefined,
        "@media (prefers-reduced-motion: no-preference)": {
          "@keyframes sparkle-twinkle": {
            "0%, 100%": { opacity: 1, transform: "scale(1)" },
            "50%": { opacity: 0.5, transform: "scale(0.86)" },
          },
        },
      }}
    >
      {specs.map((spec, index) => {
        const twinkleSx =
          index % 2 === 0
            ? {
                "@media (prefers-reduced-motion: no-preference)": {
                  animation: "sparkle-twinkle 3.4s ease-in-out infinite",
                },
              }
            : {
                "@media (prefers-reduced-motion: no-preference)": {
                  animation: "sparkle-twinkle 3.4s ease-in-out infinite",
                  animationDelay: "1.1s",
                },
              };

        if (spec.variant === "dot") {
          return (
            <Box
              key={index}
              sx={{
                width: `${spec.scale}em`,
                height: `${spec.scale}em`,
                borderRadius: "50%",
                bgcolor: "#fff",
                opacity: spec.opacity ?? 1,
                ...twinkleSx,
              }}
            />
          );
        }

        return (
          <SparkleIcon
            key={index}
            size={`${spec.scale}em`}
            opacity={spec.opacity}
            sx={twinkleSx}
          />
        );
      })}
    </Box>
  );
}
