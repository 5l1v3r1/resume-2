import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SideBarComponent } from './sidebar.component';
describe('SideBar', () => {
    let comp: SideBarComponent;
    let counter: number;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SideBarComponent],
        });
        const fixture = TestBed.createComponent(SideBarComponent);
        comp = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(comp).toBeDefined();
    });

    it('email hash should be valid', () => {
        expect(comp.emailHash).toBe('0619f090764faef6eefbd0adac62e947');
    });

    it('should log on scroll up', () => {
        console.log = jasmine.createSpy("log");
        comp.onScrollUp();
        expect(console.log).toHaveBeenCalledWith('scrolled up!!');
    });

    it('should log on scroll down', () => {
        console.log = jasmine.createSpy("log");
        comp.onScrollUp();
        expect(console.log).toHaveBeenCalled();
    });

    it('should add to numbers', () => {
        var result = comp.addNumbers(5, 5);
        expect(result).toBe(10);
    });

});
