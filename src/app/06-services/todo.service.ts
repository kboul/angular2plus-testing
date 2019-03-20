
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

export class TodoService {
    constructor(private http: Http) { }

    add(todo: Object) {
        return this.http.post('...', todo).pipe(
            map(r => r.json())
        );
    }

    getTodos() {
        return this.http.get('...').pipe(
            map(r => r.json())
        );
    }

    delete(id: number) {
        return this.http.delete('...').pipe(
            map(r => r.json())
        );
    }
}
