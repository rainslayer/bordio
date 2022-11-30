import { Colors } from "./styles";
import { ICardInfo } from "./types";

export const board: Record<string, ICardInfo[]> = {
  "New Task": [
    {
      description: "Check email",
      estimate: "0.20h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "Compare PPC agencies and make a report for Steven",
      estimate: "3.00h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "Meeting with Amanda (PR department)",
      estimate: "0.30h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "Get Patrick's approval for homepage new design",
      estimate: "0.20h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
  ],
  Scheduled: [
    {
      description: "Check email",
      estimate: "0.20h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: `Write a blogpost "7 best strategies for SEO in 2020"`,
      estimate: "5.00h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "New Ad copies for Manamaja",
      estimate: "2.00h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
  ],
  "In progress": [
    {
      description: "Check email",
      estimate: "0.20h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "Record a video comment about last week's analytics report",
      estimate: "0.20h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "Process all resumes for Content Marketer position",
      estimate: "1.00h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
  ],
  Completed: [
    {
      description: "Check email",
      estimate: "0.20h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "Weekly planning session",
      estimate: "0.45h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "Create 5+ target audiences in Facebook for Samsung ...",
      estimate: "2.30h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "Check FB Banner Design and give feedback",
      estimate: "0.20h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
    {
      description: "Check email",
      estimate: "0.20h",
      bgColor:
        Colors.cardColorsPool[
          Math.floor(Math.random() * Colors.cardColorsPool.length)
        ],
      estimateColor:
        Colors.cardEstimatePool[
          Math.floor(Math.random() * Colors.cardEstimatePool.length)
        ],
    },
  ],
};
