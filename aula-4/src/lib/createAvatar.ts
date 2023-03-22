import { funEmoji } from "@dicebear/collection";
import { createAvatar as _createAvatar } from "@dicebear/core";

export function createAvatar(seed: string) {
  const avatarResult = _createAvatar(funEmoji, {
    seed,
    scale: 100,
    backgroundType: ["gradientLinear"],
    mouth: [
      "cute",
      "drip",
      "faceMask",
      "kissHeart",
      "smileLol",
      "wideSmile",
      "lilSmile",
    ],
    eyes: [
      "closed",
      "closed2",
      "cute",
      "glasses",
      "love",
      "plain",
      "shades",
      "sleepClose",
      "stars",
      "wink",
      "wink2",
    ],
  });
  return avatarResult.toDataUriSync();
}
