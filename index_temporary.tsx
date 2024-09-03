import {createRoot} from "react-dom/client";
import {Card, IconBrowser} from "./src";
import {TypographyVariant} from "./src/components/typography/typography.enum";

createRoot(document.getElementById("root")!).render(
    <div>
        <b>This is Library of It-Leaders (Temporary)</b>
        <div>
            <IconBrowser iconId={"microsoft-edge"}/>
        </div>
        <Card>hello</Card>

    </div>
);
