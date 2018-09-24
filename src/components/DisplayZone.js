import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { asyncFetchBooks, loadComplete, fetch_status } from '../redux/actions'


class DisplayZone extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            screebHeight: window.screen.height
        }
        this.displayZoneRef = React.createRef()
    }

    componentDidMount() {
        this.props.onToEnd()
        this.props.onToEnd()
        this.props.onToEnd()
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.toEnd && this.props.toEnd) {
            this.props.onToEnd()
        }
        if(this.props.fetchStatus === fetch_status.FETCH_SUCCESS) {
            this.props.onLoadDone(this.displayZoneRef.current.clientHeight - this.state.screebHeight)
        }

    }
    render() {
        return (
            <div id='display-zone' ref={this.displayZoneRef}>
                {
                    this.props.bookLists.map((book, index) => <Book key={index} content={book}/>)
                }
            </div>
        )
    }
}

const Book = ({ content }) => {
return     <div className='user-book'> </div>
}


DisplayZone.propTypes = {
    bookLists: PropTypes.array,
    fetchStatus:  PropTypes.string,
}




function mapStateToProps(state) {
    return {
        bookLists: state.fetchBooks.books,
        fetchStatus: state.fetchBooks.status,
        toEnd: state.scroll.toEnd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToEnd: () => {
            dispatch(asyncFetchBooks())
        },
        onLoadDone: (pageHeight) => {
            dispatch(loadComplete(pageHeight))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DisplayZone)
