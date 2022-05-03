import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TypingAnimationService {
    private languages = new Map<string, Object>([
        ["en", {
			name: 21,
            job: 19
		}],
        ["de", {
			name: 25,
            job: 22
		}],
        ["es", {
			name: 22,
            job: 21
		}],
        ["fr", {
			name: 24,
            job: 22
		}],
        ["it", {
			name: 24,
            job: 21
		}]
    ]);

    public getCharackters(id: string): any {
        return this.languages.get(id);
    }
}