export class MensagemView { 
    private element: HTMLElement;
    constructor (seletor: string) { 
        this.element = document.querySelector(seletor);
    }

    protected template(model: string): string { 
        return 
        ´<p class="alert alert-info" ${model}</p>´
    }


    update(): void  { 
        const template = this.template(model);
        this.element.innerHTML = template;
    }

}