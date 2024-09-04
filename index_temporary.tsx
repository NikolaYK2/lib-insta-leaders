import {createRoot} from "react-dom/client";
import {Card} from "./src";
import {TypographyVariant} from "./src/components/typography/typography.enum";

createRoot(document.getElementById("root")!).render(
    <div>
        <b>This is Library of It-Leaders (Temporary)</b>
        <Card>hello</Card>
    </div>
);
