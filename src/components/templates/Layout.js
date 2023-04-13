import BoxedWidth from "./BoxedWidth";
import FullWidth from "./FullWidth";

export default function Layout({ layout, children }) {
  return layout === "boxed" ? (
    <BoxedWidth>{children}</BoxedWidth>
  ) : (
    <FullWidth>{children}</FullWidth>
  );
}
