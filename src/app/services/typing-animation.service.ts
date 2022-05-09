import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TypingAnimationService {
    private languages = new Map<string, Object>([
        ["en", {
			amount: 13
		}],
        ["de", {
			amount: 14
		}],
        ["es", {
			amount: 17
		}],
        ["fr", {
			amount: 15
		}],
        ["it", {
			amount: 16
		}]
    ]);

    public getCharackters(id: string): any {
        return this.languages.get(id);
    }
}