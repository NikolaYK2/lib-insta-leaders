import {createRoot} from "react-dom/client";
import {Card, IconBrowser} from "./src";
import {TypographyVariant} from "./src/components/typography/typography.enum";

createRoot(document.getElementById("root")!).render(
    <div>
        <b>This is Library of It-Leaders (Temporary)</b>
        <Card>hello</Card>
        <IconBrowser iconId={"microsoft-edge"}/>
        <Card>hello</Card>

    </div>
);
