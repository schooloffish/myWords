import React from 'react';
import { observer } from 'mobx-react';

@observer(['phraseStore'])
export class Phrase extends React.Component {
    audio;

    constructor(props) {
        super(props);
        this.audio = new Audio();
        this.play = this.play.bind(this);
        this.onKey = this.onKey.bind(this);
    }

    play(e, phrase) {
        e.preventDefault;
        this.audio.onended = () => {
            this.audio.onended = null;
            if (phrase.sentences && phrase.sentences.length) {
                this.audio.src = 'http://dict.youdao.com/dictvoice?audio=' + phrase.sentences[0] + '&type=2';
                this.audio.play();
            }
        };
        this.audio.pause();
        this.audio.src = 'http://dict.youdao.com/dictvoice?audio=' + phrase.phrase + '&type=2';
        this.audio.play();
    }

    onKey(e) {

    }

    componentDidMount() {
        this.props.phraseStore.init(this.props.match.params.id);
    }

    render() {
        const store = this.props.phraseStore;
        const phrase = store.phrase;
        if (phrase) {
            let sentenceList;
            if (phrase.sentences && phrase.sentences.length) {
                sentenceList = phrase.sentences.map((s, i) => <li key={i} className="list-group-item">
                    {s}
                </li>);
            }

            return <div >
                <h2 className="text-center">{phrase.phrase}</h2>
                <h2 className="text-center" style={{ color: 'gray', dispaly: 'inline-block' }}>{phrase.phonetic}
                    <a href="#" onClick={(e) => this.play(e, phrase)}>
                        <span className="glyphicon glyphicon-volume-up"></span>
                    </a>
                </h2>
                <br />
                {store.showMeaning &&
                    <div>
                        {phrase.meaning}
                    </div>}
                {sentenceList &&
                    <ul className="list-group">
                        {sentenceList}
                    </ul >
                }
                <div className="text-center">
                    {store.showNext || <div>
                        <button className="btn btn-info" onClick={store.remember}>I remember</button>
                        <button className="btn btn-info" onClick={store.forget} > I forget</button >
                    </div >}
                    <h2 style={{ dispaly: 'inline-block' }}>
                        {store.showNext &&
                            <a href="#" onClick={store.next}>
                                <span className="glyphicon glyphicon-arrow-right"></span>
                            </a>
                        }
                    </h2 >
                </div >

                <br />
                <br />
                {store.showAddExample &&
                    <div>
                        <textarea value={store.example} onChange={store.exampleChange}></textarea >
                        <br />
                        <button className="btn btn-info" onClick={store.addExample}>add example to this phrase</button>
                    </div>
                }
            </div >
        }
        else {
            return <div>loading phrase...</div>
        }
    }
}