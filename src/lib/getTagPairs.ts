import { TagPairs } from "./TagPairs.js";

const REQUIRED_TAG_NAMES = [
    "Event",
    "Site",
    "Date",
    "Round",
    "White",
    "Black",
    "Result"
]

export function getTagPairs(pgn: string): TagPairs | undefined {
    const lines = pgn.split('\n');
    const tagLines: string[] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (!line.startsWith('[')) {
            break;
        }

        tagLines.push(line.substring(1, line.length - 1));
    }

    const tagMap: Map<string, string> = new Map();

    for (let tagLine of tagLines) {
        const words = tagLine.split(' ');
        const tag = words.shift();
        const value = words.join(' ').replace(/"/g, '');
        tagMap.set(tag, value);
    }

    for (let requiredTag of REQUIRED_TAG_NAMES) {
        if (!tagMap.has(requiredTag)) {
            return undefined;
        }
    }

    const tagPairs: TagPairs = {
        event: tagMap.get("Event")!,
        site: tagMap.get("Site")!,
        date: tagMap.get("Date")!,
        round: tagMap.get("Round")!,
        white: tagMap.get("White")!,
        black: tagMap.get("Black")!,
        result: tagMap.get("Result")!,
        opt: new Map()
    };

    const optionalTags = Array.from(tagMap.keys()).filter((tag) => !REQUIRED_TAG_NAMES.includes(tag));

    for (const tag of optionalTags) {
        tagPairs.opt.set(tag, tagMap.get(tag)!);
    }

    return tagPairs;
}