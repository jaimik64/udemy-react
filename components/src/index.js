import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetails from './CommentDetails'
import ApprovalCard from "./ApprovalCard";
import './styles/App.css'

const App = () => {
    return (
        <div className="ui comments container">
            <h3 className="ui dividing header">Comments</h3>
            <ApprovalCard>
                <div>
                    <h4>Warning!!!</h4>
                    Are you sure???
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Sam" date="Today at 5:42PM" description="How artistic!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Alex" date="Today at 3:20PM" description="How artistic!!!!!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Jane" date="Today at 6:42PM" description="Nice Work" avatar={faker.image.image()} />
            </ApprovalCard>

        </div>

    )
}


ReactDOM.render(<App />, document.getElementById('root'))