describe('Primeiro Teste Tarefa 16', () => {
    it('Acessar e Preencher o forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Glauber Franco')
        await $('~Dropdown').click()
        const selector = 'new UiSelector().text("This app is awesome").className("android.widget.CheckedTextView")'
        const button = await $(android=$(selector))
        await button.click()
        await $('~button-Active').click()
        expect(await $('~android:id/button1')).toBeDisplayed()
    });
});
