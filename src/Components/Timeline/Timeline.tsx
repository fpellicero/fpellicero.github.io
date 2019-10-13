import * as React from "react";
import clsx from "clsx";

interface ITimelineProps extends React.HTMLProps<HTMLDivElement> {}
const Timeline = ({ children, className, ...props }: ITimelineProps) => (
  <div className={`timeline ${className}`.trim()}>{children}</div>
)

interface ITimelineItemProps extends React.HTMLProps<HTMLDivElement> {
  color: "primary" | "danger" | "warning"
  marker?: React.ReactNode;
}
const TimelineItem = ({ children, color, marker, ...props }: ITimelineItemProps) => {
  return (
    <div className={clsx("timeline-item", `is-${color}`)}>
      {marker}
      <div className="timeline-content">{children}</div>
    </div>
  )
}

interface ITimelineMarkerProps {
  color: "primary" | "danger" | "warning";
  className?: string;
  isImage?: boolean;
  children?: React.ReactNode;
}
const TimelineMarker = ({
  children,
  color,
  className = "",
  isImage = false
}: ITimelineMarkerProps) => {
  return (
    <div className={clsx("timeline-marker", `is-${color}`, isImage && "is-image", className)}>
      {children}
    </div>
  );
}

interface ITimelineHeaderProps {
  color: "danger" | "warning" | "primary";
  children: React.ReactNode;
}
const TimelineHeader = ({ children, color }: ITimelineHeaderProps) => {
  return (
    <header className="timeline-header">
      <span className={`tag is-medium is-${color}`}>{children}</span>
    </header>
  )
}

Timeline.Item = TimelineItem;
Timeline.Header = TimelineHeader;
Timeline.Marker = TimelineMarker;

export default Timeline;
