import React from 'react';
import './editor.css';

// define types for props
export interface EditorProps {
    updateStateFromEditorToWidget: any;
}

// define types for state
export interface EditorState {
    title: string;
    unit: string;
    showWind: string;
}

class Editor extends React.Component<EditorProps, EditorState> {
    constructor(props: EditorProps) {
        super(props);
        this.state = {
            title: "",
            unit: "metric",
            showWind: "true",
        };
    
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
        this.handleShowWindChange = this.handleShowWindChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    checkforNull = (props: any) => {
        return props !== null || props !== undefined || props !== '';
    }  
    
    handleTitleChange(event: { target: { value: string; }; }) {
        if (this.checkforNull(event.target.value)) {
            this.setState({
                title: event.target.value,
            });
        }
    }

    handleUnitChange(event: { target: { value: string; }; }) {
        if (this.checkforNull(event.target.value)) {
            this.setState({
                unit: event.target.value,
            });
        }
    }

    handleShowWindChange(event: { target: { value: string; }; }) {
        if (this.checkforNull(event.target.value)) {
            this.setState({
                showWind: event.target.value,
            });
        }
    }
    
    handleSubmit(event: { preventDefault: () => void; }) {
        this.props.updateStateFromEditorToWidget(this.state.title, this.state.unit, this.state.showWind);
        // console.log(this.state.title, this.state.unit, this.state.showWind);
        this.setState({
            title: "",
        });
        event.preventDefault();
    }

    render() {
        const { title } = this.state;
        return (
            <form className="weather-editor" onSubmit={this.handleSubmit}>
                <div className="weather-editor-title">
                        Title
                        <input className="weather-editor-title-input" type="text" value={title} onChange={this.handleTitleChange} placeholder="Title of widget"/>
                </div>   
                <div className="weather-editor-unit">
                        Temperature
                        <div className="weather-editor-unit-settings">
                            <label htmlFor="unit"><input type="radio" value="metric" onChange={this.handleUnitChange} name="unit" checked={this.state.unit === "metric"}/>&#8451;</label>
                            <label htmlFor="unit"><input type="radio" value="imperial" onChange={this.handleUnitChange} name="unit" />&#8457;</label>
                        </div>
                </div> 
                <div className="weather-editor-wind">
                        Wind
                        <div className="weather-editor-unit-settings">
                            <label htmlFor="showWind"><input type="radio" value="true" onChange={this.handleShowWindChange} name="showWind" checked={this.state.showWind === "true"} />On</label>
                            <label htmlFor="showWind"><input type="radio" value="false" onChange={this.handleShowWindChange} name="showWind" />Off</label>
                        </div>
                </div> 

                <button type="submit" value="Submit">Submit</button>
            </form>
        );
    }
}

export default Editor;