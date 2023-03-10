import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  hasLocalStorage!: boolean;
  private readonly storageKeyAccessToken = "Authorization";

  constructor() {
    this.checkLocalStorage();
  }

  private saveData<T>(key: string, data: T): void {
    if (!this.hasLocalStorage) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData<T>(key: string): string | null {
    if (!this.hasLocalStorage) {
      return null;
    }
    return localStorage.getItem(key);
  }

  getString(key: string): string | null {
    if (!this.hasLocalStorage) {
      return null;
    }
    return localStorage.getItem(key);
  }

  private checkLocalStorage(): void {
    try {
      const test = "t";
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      this.hasLocalStorage = true;
    } catch (e) {
      this.hasLocalStorage = false;
    }
  }

  updateLocalStorageData(authToken: string): void {
    this.saveData(this.storageKeyAccessToken, authToken);
  }
}
