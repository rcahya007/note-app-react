import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      characterCount: 50,
    };

    this.onChangeTitleEventHandler = this.onChangeTitleEventHandler.bind(this);
    this.onChangeBodyEventHandler = this.onChangeBodyEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onChangeTitleEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
        characterCount: 50 - event.target.value.length,
      };
    });
  }

  onChangeBodyEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form
        className="mx-auto max-w-2xl w-full py-7 text-white"
        onSubmit={this.onSubmitEventHandler}
      >
        <h4>Buat Catatan</h4>
        <p className="w-full text-end">
          Sisa karakter: {this.state.characterCount}
        </p>
        <div className="w-full flex flex-col gap-y-4">
          <input
            type="text"
            name="note_title"
            value={this.state.title}
            maxLength={50}
            onChange={this.onChangeTitleEventHandler}
            className="p-2 border-2 border-white rounded w-full text-white bg-transparent"
            placeholder="Ini adalah judul ..."
          />
          <textarea
            value={this.state.body}
            onChange={this.onChangeBodyEventHandler}
            name="note_body"
            id="note_body"
            cols="30"
            rows="10"
            className="p-2 border-2 border-white rounded w-full text-white bg-transparent"
            placeholder="Tuliskan catatanmu di sini..."
          ></textarea>
          <button
            className="p-2 border-2 border-white rounded w-full text-white bg-transparent font-bold"
            type="submit"
          >
            Buat
          </button>
        </div>
      </form>
    );
  }
}

export default NoteInput;
