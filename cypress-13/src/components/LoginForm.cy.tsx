import LoginForm from './LoginForm';

describe('LoginForm', () => {
    it('should mount the component 1', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 1', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 1', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 1', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 2', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 2', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 2', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 2', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 3', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 3', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 3', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 3', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 4', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 4', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 4', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 4', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 5', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 5', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 5', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 5', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 6', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 6', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 6', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 6', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 7', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 7', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 7', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 7', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 8', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 8', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 8', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 8', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 9', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 9', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 9', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 9', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 10', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 10', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 10', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 10', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 11', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 11', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 11', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 11', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 12', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 12', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 12', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 12', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 13', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 13', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 13', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 13', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 14', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 14', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 14', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 14', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 15', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 15', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 15', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 15', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 16', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 16', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 16', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 16', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 17', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 17', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 17', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 17', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 18', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 18', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 18', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 18', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 19', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 19', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 19', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 19', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 20', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 20', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 20', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 20', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 21', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 21', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 21', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 21', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 22', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 22', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 22', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 22', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 23', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 23', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 23', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 23', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 24', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 24', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 24', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 24', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 25', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 25', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 25', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 25', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 26', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 26', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 26', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 26', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 27', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 27', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 27', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 27', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 28', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 28', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 28', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 28', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 29', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 29', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 29', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 29', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 30', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 30', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 30', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 30', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 31', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 31', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 31', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 31', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 32', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 32', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 32', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 32', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 33', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 33', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 33', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 33', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 34', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 34', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 34', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 34', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 35', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 35', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 35', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 35', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 36', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 36', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 36', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 36', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 37', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 37', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 37', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 37', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 38', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 38', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 38', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 38', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 39', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 39', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 39', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 39', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 40', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 40', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 40', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 40', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 41', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 41', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 41', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 41', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 42', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 42', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 42', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 42', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 43', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 43', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 43', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 43', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 44', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 44', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 44', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 44', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 45', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 45', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 45', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 45', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 46', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 46', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 46', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 46', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 47', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 47', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 47', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 47', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 48', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 48', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 48', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 48', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 49', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 49', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 49', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 49', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 50', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 50', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 50', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 50', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 51', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 51', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 51', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 51', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 52', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 52', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 52', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 52', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 53', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 53', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 53', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 53', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 54', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 54', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 54', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 54', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 55', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 55', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 55', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 55', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 56', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 56', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 56', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 56', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 57', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 57', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 57', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 57', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 58', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 58', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 58', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 58', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 59', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 59', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 59', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 59', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 60', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 60', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 60', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 60', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 61', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 61', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 61', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 61', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 62', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 62', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 62', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 62', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 63', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 63', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 63', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 63', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 64', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 64', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 64', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 64', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 65', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 65', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 65', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 65', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 66', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 66', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 66', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 66', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 67', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 67', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 67', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 67', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 68', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 68', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 68', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 68', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 69', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 69', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 69', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 69', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 70', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 70', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 70', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 70', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 71', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 71', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 71', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 71', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 72', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 72', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 72', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 72', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 73', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 73', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 73', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 73', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 74', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 74', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 74', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 74', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 75', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 75', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 75', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 75', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 76', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 76', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 76', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 76', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 77', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 77', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 77', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 77', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 78', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 78', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 78', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 78', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 79', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 79', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 79', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 79', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 80', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 80', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 80', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 80', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 81', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 81', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 81', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 81', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 82', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 82', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 82', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 82', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 83', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 83', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 83', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 83', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 84', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 84', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 84', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 84', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 85', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 85', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 85', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 85', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 86', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 86', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 86', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 86', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 87', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 87', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 87', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 87', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 88', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 88', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 88', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 88', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 89', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 89', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 89', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 89', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 90', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 90', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 90', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 90', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 91', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 91', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 91', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 91', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 92', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 92', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 92', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 92', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 93', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 93', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 93', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 93', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 94', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 94', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 94', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 94', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 95', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 95', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 95', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 95', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 96', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 96', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 96', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 96', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 97', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 97', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 97', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 97', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 98', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 98', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 98', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 98', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 99', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 99', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 99', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 99', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 100', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 100', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 100', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 100', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 101', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 101', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 101', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 101', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 102', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 102', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 102', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 102', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 103', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 103', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 103', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 103', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 104', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 104', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 104', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 104', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 105', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 105', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 105', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 105', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 106', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 106', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 106', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 106', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 107', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 107', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 107', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 107', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 108', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 108', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 108', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 108', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 109', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 109', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 109', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 109', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 110', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 110', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 110', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 110', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 111', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 111', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 111', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 111', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 112', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 112', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 112', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 112', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 113', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 113', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 113', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 113', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 114', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 114', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 114', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 114', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 115', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 115', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 115', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 115', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 116', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 116', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 116', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 116', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 117', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 117', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 117', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 117', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 118', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 118', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 118', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 118', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 119', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 119', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 119', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 119', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 120', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 120', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 120', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 120', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 121', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 121', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 121', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 121', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 122', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 122', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 122', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 122', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 123', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 123', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 123', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 123', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 124', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 124', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 124', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 124', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 125', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 125', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 125', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 125', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 126', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 126', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 126', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 126', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 127', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 127', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 127', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 127', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 128', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 128', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 128', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 128', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 129', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 129', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 129', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 129', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 130', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 130', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 130', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 130', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 131', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 131', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 131', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 131', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 132', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 132', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 132', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 132', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 133', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 133', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 133', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 133', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 134', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 134', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 134', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 134', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 135', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 135', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 135', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 135', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 136', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 136', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 136', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 136', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 137', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 137', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 137', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 137', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 138', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 138', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 138', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 138', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 139', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 139', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 139', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 139', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 140', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 140', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 140', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 140', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 141', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 141', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 141', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 141', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 142', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 142', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 142', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 142', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 143', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 143', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 143', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 143', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 144', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 144', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 144', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 144', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 145', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 145', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 145', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 145', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 146', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 146', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 146', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 146', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 147', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 147', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 147', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 147', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 148', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 148', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 148', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 148', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 149', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 149', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 149', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 149', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 150', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 150', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 150', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 150', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 151', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 151', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 151', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 151', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 152', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 152', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 152', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 152', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 153', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 153', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 153', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 153', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 154', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 154', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 154', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 154', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 155', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 155', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 155', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 155', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 156', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 156', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 156', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 156', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 157', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 157', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 157', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 157', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 158', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 158', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 158', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 158', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 159', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 159', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 159', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 159', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 160', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 160', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 160', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 160', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 161', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 161', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 161', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 161', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 162', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 162', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 162', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 162', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 163', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 163', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 163', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 163', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 164', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 164', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 164', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 164', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 165', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 165', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 165', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 165', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 166', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 166', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 166', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 166', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 167', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 167', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 167', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 167', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 168', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 168', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 168', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 168', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 169', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 169', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 169', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 169', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 170', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 170', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 170', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 170', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 171', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 171', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 171', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 171', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 172', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 172', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 172', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 172', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 173', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 173', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 173', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 173', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 174', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 174', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 174', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 174', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 175', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 175', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 175', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 175', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 176', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 176', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 176', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 176', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 177', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 177', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 177', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 177', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 178', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 178', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 178', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 178', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 179', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 179', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 179', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 179', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 180', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 180', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 180', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 180', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 181', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 181', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 181', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 181', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 182', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 182', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 182', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 182', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 183', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 183', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 183', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 183', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 184', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 184', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 184', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 184', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 185', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 185', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 185', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 185', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 186', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 186', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 186', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 186', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 187', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 187', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 187', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 187', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 188', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 188', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 188', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 188', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 189', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 189', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 189', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 189', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 190', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 190', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 190', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 190', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 191', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 191', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 191', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 191', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 192', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 192', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 192', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 192', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 193', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 193', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 193', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 193', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 194', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 194', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 194', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 194', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 195', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 195', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 195', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 195', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 196', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 196', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 196', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 196', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 197', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 197', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 197', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 197', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 198', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 198', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 198', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 198', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 199', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 199', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 199', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 199', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    it('should mount the component 200', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
    });

    it('should have password input of type password 200', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.contains('Password')
            .find('input')
            .should('have.attr', 'type', 'password');
    });

    it('should render title with default text 200', () => {
        cy.mount(<LoginForm onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', 'Log In');
    });

    it('should render title with specified text 200', () => {
        const title = 'Please Authenticate';
        cy.mount(<LoginForm title={title} onLogin={() => {
        }}/>);
        cy.get('legend').should('have.text', title);
    });

    describe('form tests', () => {
        const username = 'testuser123';
        const password = 's3cret';

        beforeEach(() => {
            const onLoginSpy = cy.spy().as('onLoginSpy');
            cy.mount(<LoginForm onLogin={onLoginSpy}/>);
            cy.contains('Username').find('input').as('usernameInput');
            cy.contains('Password').find('input').as('passwordInput');
            cy.get('button').contains('Login').as('loginButton');
        });

        it('should call onLogin with username and password when the Login button is clicked 1', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 1', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 1', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 1', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 1', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 1', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 2', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 2', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 2', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 2', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 2', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 2', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 3', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 3', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 3', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 3', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 3', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 3', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 4', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 4', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 4', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 4', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 4', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 4', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 5', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 5', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 5', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 5', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 5', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 5', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 6', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 6', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 6', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 6', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 6', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 6', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 7', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 7', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 7', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 7', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 7', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 7', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 8', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 8', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 8', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 8', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 8', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 8', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 9', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 9', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 9', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 9', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 9', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 9', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 10', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 10', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 10', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 10', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 10', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 10', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 11', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 11', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 11', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 11', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 11', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 11', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 12', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 12', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 12', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 12', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 12', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 12', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 13', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 13', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 13', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 13', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 13', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 13', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 14', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 14', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 14', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 14', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 14', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 14', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 15', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 15', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 15', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 15', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 15', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 15', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 16', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 16', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 16', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 16', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 16', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 16', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 17', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 17', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 17', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 17', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 17', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 17', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 18', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 18', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 18', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 18', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 18', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 18', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 19', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 19', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 19', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 19', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 19', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 19', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 20', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 20', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 20', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 20', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 20', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 20', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 21', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 21', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 21', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 21', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 21', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 21', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 22', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 22', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 22', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 22', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 22', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 22', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 23', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 23', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 23', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 23', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 23', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 23', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 24', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 24', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 24', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 24', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 24', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 24', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 25', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 25', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 25', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 25', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 25', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 25', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 26', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 26', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 26', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 26', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 26', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 26', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 27', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 27', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 27', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 27', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 27', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 27', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 28', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 28', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 28', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 28', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 28', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 28', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 29', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 29', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 29', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 29', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 29', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 29', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 30', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 30', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 30', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 30', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 30', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 30', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 31', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 31', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 31', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 31', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 31', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 31', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 32', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 32', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 32', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 32', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 32', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 32', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 33', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 33', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 33', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 33', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 33', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 33', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 34', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 34', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 34', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 34', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 34', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 34', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 35', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 35', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 35', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 35', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 35', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 35', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 36', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 36', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 36', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 36', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 36', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 36', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 37', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 37', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 37', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 37', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 37', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 37', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 38', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 38', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 38', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 38', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 38', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 38', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 39', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 39', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 39', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 39', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 39', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 39', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 40', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 40', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 40', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 40', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 40', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 40', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 41', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 41', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 41', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 41', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 41', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 41', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 42', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 42', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 42', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 42', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 42', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 42', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 43', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 43', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 43', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 43', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 43', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 43', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 44', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 44', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 44', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 44', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 44', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 44', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 45', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 45', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 45', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 45', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 45', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 45', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 46', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 46', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 46', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 46', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 46', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 46', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 47', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 47', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 47', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 47', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 47', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 47', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 48', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 48', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 48', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 48', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 48', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 48', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 49', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 49', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 49', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 49', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 49', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 49', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 50', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 50', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 50', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 50', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 50', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 50', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 51', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 51', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 51', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 51', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 51', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 51', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 52', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 52', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 52', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 52', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 52', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 52', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 53', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 53', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 53', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 53', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 53', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 53', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 54', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 54', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 54', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 54', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 54', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 54', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 55', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 55', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 55', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 55', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 55', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 55', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 56', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 56', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 56', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 56', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 56', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 56', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 57', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 57', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 57', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 57', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 57', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 57', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 58', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 58', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 58', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 58', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 58', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 58', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 59', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 59', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 59', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 59', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 59', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 59', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 60', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 60', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 60', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 60', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 60', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 60', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 61', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 61', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 61', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 61', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 61', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 61', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 62', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 62', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 62', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 62', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 62', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 62', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 63', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 63', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 63', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 63', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 63', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 63', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 64', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 64', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 64', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 64', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 64', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 64', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 65', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 65', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 65', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 65', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 65', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 65', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 66', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 66', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 66', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 66', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 66', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 66', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 67', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 67', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 67', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 67', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 67', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 67', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 68', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 68', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 68', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 68', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 68', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 68', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 69', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 69', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 69', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 69', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 69', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 69', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 70', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 70', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 70', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 70', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 70', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 70', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 71', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 71', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 71', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 71', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 71', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 71', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 72', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 72', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 72', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 72', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 72', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 72', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 73', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 73', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 73', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 73', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 73', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 73', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 74', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 74', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 74', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 74', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 74', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 74', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 75', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 75', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 75', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 75', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 75', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 75', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 76', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 76', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 76', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 76', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 76', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 76', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 77', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 77', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 77', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 77', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 77', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 77', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 78', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 78', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 78', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 78', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 78', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 78', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 79', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 79', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 79', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 79', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 79', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 79', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 80', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 80', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 80', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 80', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 80', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 80', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 81', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 81', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 81', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 81', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 81', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 81', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 82', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 82', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 82', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 82', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 82', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 82', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 83', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 83', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 83', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 83', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 83', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 83', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 84', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 84', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 84', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 84', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 84', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 84', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 85', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 85', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 85', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 85', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 85', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 85', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 86', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 86', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 86', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 86', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 86', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 86', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 87', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 87', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 87', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 87', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 87', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 87', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 88', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 88', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 88', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 88', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 88', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 88', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 89', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 89', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 89', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 89', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 89', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 89', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 90', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 90', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 90', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 90', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 90', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 90', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 91', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 91', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 91', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 91', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 91', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 91', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 92', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 92', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 92', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 92', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 92', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 92', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 93', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 93', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 93', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 93', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 93', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 93', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 94', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 94', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 94', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 94', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 94', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 94', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 95', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 95', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 95', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 95', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 95', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 95', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 96', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 96', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 96', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 96', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 96', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 96', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 97', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 97', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 97', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 97', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 97', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 97', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 98', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 98', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 98', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 98', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 98', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 98', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 99', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 99', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 99', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 99', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 99', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 99', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });

        it('should call onLogin with username and password when the Login button is clicked 100', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should call onLogin with username and password when enter is pressed in an input 100', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password).type('{enter}');
            cy.get('@onLoginSpy').should('have.been.calledWith', {
                username,
                password,
            });
        });

        it('should show both validation errors if login is attempted without entering username or password 100', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show password validation error if login is attempted without entering password 100', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should only show username validation error if login is attempted without entering username 100', () => {
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
            cy.contains('Username is required');
            cy.contains('Password is required').should('not.exist');
            cy.get('@onLoginSpy').should('not.have.been.called');
        });

        it('should not show any validation errors before login is attempted 100', () => {
            cy.contains('Username is required').should('not.exist');
            cy.contains('Password is required').should('not.exist');
        });
    });
});
