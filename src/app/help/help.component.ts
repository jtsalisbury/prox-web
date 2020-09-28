import { Component, OnInit } from '@angular/core';
import { CommandService, CommandData } from '../command.service';

@Component({ templateUrl: 'help.component.html' })
export class HelpComponent implements OnInit {
    displayedColumns: string[] = ['prettyName', 'aliases', 'help'];
    commands: CommandData[];

    constructor(private commandService: CommandService) {
        this.fetch();
    }

    fetch() {
        this.commandService.getAll()
            .subscribe((data: CommandData[]) => {
                this.commands = data;
                console.log(data);
            });
    }

    ngOnInit() {

    }
}