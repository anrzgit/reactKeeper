import React from "react";
import notes from "../notes";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";

function createNotes(noteItem) {
  //basically ye funtion me data ka idea
  // hard coded ke text se aaya hai
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {/* for every element in notes array createNotes is called */}
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
