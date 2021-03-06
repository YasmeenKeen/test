import { Component, Input } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';
import { LANGS, LangService } from '../../../shared/services/lang/lang.service';

@Component({
    selector: 'app-lang-switcher-list',
    templateUrl: 'lang-switcher-list.component.html',
    styleUrls: ['lang-switcher-list.component.scss'],
})
export class LangSwitcherListComponent {
    @Input()
    popover: NbPopoverDirective;

    langs = LANGS;

    constructor(private lang: LangService) { }

    onToggleLang(l: string) {
        this.lang.set(l);
        this.popover.hide();
    }
}
