import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TypingAnimationService {
    private languages = new Map<string, Object>([
        ["en", {
			name: 21,
            job: 25
		}],
        ["de", {
			name: 25,
            job: 28
		}],
        ["es", {
			name: 22,
            job: 30
		}],
        ["fr", {
			name: 24,
            job: 36
		}],
        ["it", {
			name: 24,
            job: 34
		}]
    ]);

    public getCharackters(id: string): any {
        return this.languages.get(id);
    }
}