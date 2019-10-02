import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookListItem from '../BookListItem';
import { withBookstoreService } from '../HOC'
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
 
import './BookList.css';

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />;
    }
}

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                                book={book} 
                                onAddedToCart={() => onAddedToCart(book.id)} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

const mapStateToProps = ({ bookList: {books, loading, error} }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(ownProps.bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch);
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);