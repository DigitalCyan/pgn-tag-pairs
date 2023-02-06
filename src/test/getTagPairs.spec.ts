import assert from "assert"
import { it } from "mocha"
import { CommonOptionalTags } from "../index.js"
import { getTagPairs } from "../lib/getTagPairs.js"

const VALID_PGN = '[Event "Live Chess"]\n[Site "Chess.com"]\n[Date "2023.02.03"]\n[Round "?"]\n[White "John"]\n[Black "Doe"]\n[Result "0-1"]\n[ECO "B01"]\n[WhiteElo "42"]\n[BlackElo "42"]\n[TimeControl "600"]\n[EndTime "6:01:08 PST"]\n[Termination "DigitalCyan won by resignation"]\n1. e4 d5 2. d3 e6 3. exd5 exd5 4. Nc3 Bb4 5. Bd2 d4 6. Ne4 Qe7 7. Bxb4 Qxb4 + 8.\nc3 Qe7 9. cxd4 f5 10. Qe2 fxe4 11. Qxe4 Be6 12. Nf3 Nf6 13. Qxb7 Bd5 + 0 - 1'
const INVALID_PGN = '[Eent "Live Chess"]\n[Site "Chess.com"]\n[Date "2023.02.03"]\n[Round "?"]\n[White "John"]\n[Black "Doe"]\n[Result "0-1"]\n[ECO "B01"]\n[WhiteElo "42"]\n[BlackElo "42"]\n[TimeControl "600"]\n[EndTime "6:01:08 PST"]\n[Termination "DigitalCyan won by resignation"]\n1. e4 d5 2. d3 e6 3. exd5 exd5 4. Nc3 Bb4 5. Bd2 d4 6. Ne4 Qe7 7. Bxb4 Qxb4 + 8.\nc3 Qe7 9. cxd4 f5 10. Qe2 fxe4 11. Qxe4 Be6 12. Nf3 Nf6 13. Qxb7 Bd5 + 0 - 1'

describe('The get getTagPairs function should:', () => {
    it('Properly parse valid PGNs', () => {
        const tags = getTagPairs(VALID_PGN);
        assert.equal(tags.event, "Live Chess");
        assert.equal(tags.site, "Chess.com");
        assert.equal(tags.date, "2023.02.03");
        assert.equal(tags.round, "?");
        assert.equal(tags.white, "John");
        assert.equal(tags.black, "Doe");
        assert.equal(tags.result, "0-1");
    })

    it('Return undefined if the PGN is invalid', () => {
        assert.equal(getTagPairs(INVALID_PGN), undefined);
    });

    it('Properly parse optional tags', () => {
        const tags = getTagPairs(VALID_PGN);
        assert.equal(tags.opt.get(CommonOptionalTags.TimeControl), 600);
    })
})