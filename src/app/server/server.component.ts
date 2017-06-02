import {Component} from '@angular/core';

// decortator to show typescript when its compiling that this is a component
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10; 
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}