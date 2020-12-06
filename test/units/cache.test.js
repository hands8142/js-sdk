const { Cache } = require("../../dist/src/utils/cache")
const { Collection } = require("discord.js")

describe("Cache Test", () => {
    it("should be able to set and delete as Collection", done => {
        const cache = new Cache(1000)

        setTimeout(() => {
            expect(cache.size).toBe(0)
            done()
        }, 2000)

        expect(cache).toBeInstanceOf(Collection)

        cache.set("asdf", "ㅎㅇ")

        expect(cache.size).toBe(1)

        cache.delete("asdf")

        expect(cache.size).toBe(0)

        const arr = "aadagdf".repeat(100).split("")

        for(const v of arr) cache.set(v, v)
    })
})