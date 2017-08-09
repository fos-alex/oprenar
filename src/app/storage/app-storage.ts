import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppSettings } from '../app-settings';
import { Injectable } from '@angular/core';

@Injectable()
export class AppStorage {

    private static storage = window.localStorage;
    private static defaultState = {
        propuestas: {
            fpj: null,
            pa: null,
            pe: null,
            pld: null,
            ps: null
        }
    };

    // Called at the bottom of the file
    static init() {
        if (!AppStorage.getState())
            return AppStorage.setState(AppStorage.defaultState);
    }

    static addToState(key, item) {
        let state = this.getState();
        state[key] = item;
        return this.setState(state);
    }

    static getState() {
        return this.getItem(AppSettings.STORAGE_STATE_KEY);
    }

    static setState(state) {
        return this.setItem(AppSettings.STORAGE_STATE_KEY, state);
    }

    static setItem(key, item) {
        return this.storage.setItem(key, JSON.stringify(item));
    }

    static getItem(key) {
        return JSON.parse(this.storage.getItem(key));
    }

    static removeItem(key) {
        return this.storage.removeItem(key);
    }
}

// Initialize class
AppStorage.init();