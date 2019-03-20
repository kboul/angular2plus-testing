import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    // Arrange - create an instance of VoteComponent
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });

    it('should increment total votes when upvotes', () => {
        // Act - calling a mehtod or a function
        component.upVote();

        // Assert
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement total votes when upvotes', () => {
        // Act - calling a mehtod or a function
        component.downVote();

        // Assert
        expect(component.totalVotes).toBe(-1);
    });
});
