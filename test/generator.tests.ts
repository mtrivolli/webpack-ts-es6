describe("Generators", () => {
    it("Should work", () => {
        function* sequence() {
            let i = 0;
            while (true)
                yield i++;
        }

        expect(sequence().next().value).toBe(0);
    });
});