class Ellipszoid {

    axisa?: HTMLInputElement | null;
    axisb?: HTMLInputElement | null;
    axisc?: HTMLInputElement | null;

    volume?: HTMLInputElement | null;

    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.axisa = document.querySelector("#axisa");
        this.axisb = document.querySelector("#axisb");
        this.axisc = document.querySelector("#axisc");
        this.volume = document.querySelector("#volume");
        this.calcButton = document.querySelector("#calcButton");
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const axisa = Number(this.axisa?.value);
        const axisb = Number(this.axisb?.value);
        const axisc = Number(this.axisc?.value);
        const volume = this.calcVolume(axisa, axisb, axisc);

        this.rederResult(volume);
    }
    calcVolume(aaxis: number, baxis: number, caxis: number): number {
        return 4/3 * Math.PI * aaxis * baxis * caxis
    }

    rederResult(volume: number) {
        if(this.volume) {
            this.volume.value = String(volume);
        }     
    }
}

new Ellipszoid();