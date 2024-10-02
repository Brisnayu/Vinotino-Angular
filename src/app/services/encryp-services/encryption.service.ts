import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private password = environment.password;

  decryptContent(encryptedContent: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedContent, this.password);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      console.log('decryptedData:', decryptedData);
      return decryptedData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
