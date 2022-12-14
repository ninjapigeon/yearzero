import { YZActorSheet } from "./actor-sheet.js";

export class YZNpcSheet extends YZActorSheet {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["yearzero", "sheet", "actor"],
            template: "systems/yearzero/templates/actor/npc-sheet.html",
            width: 600,
            height: 615,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }],
        });
    }
}
