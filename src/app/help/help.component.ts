import { Component, Inject, OnInit } from '@angular/core';
import { CommandService, CommandData } from '../command.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({ templateUrl: 'help.component.html' })
export class HelpComponent implements OnInit {
    displayedColumns: string[] = ['prettyName', 'aliases', 'help'];
    commands: CommandData[];

    constructor(private commandService: CommandService, public dialog: MatDialog) {
        this.fetch();
    }

    fetch() {
        this.commandService.getAll()
            .subscribe((data: CommandData[]) => {
                this.commands = data.sort((a: CommandData, b: CommandData) => {
                    let aN = a.prettyName;
                    let bN = b.prettyName;

                    if (aN < bN) {
                        return -1;
                    }

                    if (aN > bN) {
                        return 1;
                    }

                    return 0;
                })
            });
    }

    showMore(command) {
        console.log(command);

        this.dialog.open(CommandHelpDialogComponent, {
            data: command
        });
    }

    ngOnInit() {

    }
}

@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'dialog.command.html'
  })
  export class CommandHelpDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: CommandData) {}
  }