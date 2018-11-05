class Keyboard {
    constructor() {
        document.addEventListener('keypress', this.keypressHandler.bind(this))
    }

    keypressHandler(event: KeyboardEvent) {
        alert(event.key)
    }

    public registerMovementHandler() {
        alert("something")
    }

}
export const keyboard = new Keyboard()