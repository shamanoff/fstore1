import {Component, OnInit} from '@angular/core';
import {
  AngularFirestore, AngularFirestoreCollection,
  AngularFirestoreDocument, AngularFirestoreModule
} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

interface Note {
  content: string;
  hearts: number;
  id?: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  noteDoc: AngularFirestoreDocument<Note>;
  note: Observable<Note>;

  newContent: string;
  snapshot: any;

  constructor(private afs: AngularFirestore, private router: Router) {
  }

  ngOnInit() {
    this.notesCollection = this.afs.collection('notes', ref => {
      return ref.orderBy('content');
    });
    this.notes = this.notesCollection.valueChanges();
    this.snapshot = this.notesCollection.snapshotChanges()
      .map(arr => {
        console.log(arr);
        return arr.map(snap => snap.payload.doc.data());
      });

    this.noteDoc = this.afs.doc('notes/CHeWXFfORYRqj47M7GGr');
    this.note = this.noteDoc.valueChanges();
  }

  updateContent() {
    this.noteDoc.update({content: this.newContent});
  }



}
