import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TypingAnimationService {
    private languages = new Map<string, Object>([
        ["en", {
			amount: 18
		}],
        ["de", {
			amount: 19
		}],
        ["es", {
			amount: 25
		}],
        ["fr", {
			amount: 24
		}],
        ["it", {
			amount: 24
		}]
    ]);

    public getCharackters(id: string): any {
        return this.languages.get(id);
    }
}