Feature: GitHub tests(repository)
As a user
I can doing smth

@desktop @mobile
Scenario: Create repository
	Given I navigates to "https://github.com/"
    When I choose menu "New repository"
	When I create new repository with name "Test1"
	Then I see repository with name "Test1"
@desktop @mobile @ignore
Scenario: Rename repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1"
    When I choose "Setting" tab menu
    And I rename repository to name "Test1_rename"
    Then I see repository with name "Test1_rename"
@desktop @mobile @ignore
Scenario: Create file in repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1_rename" 
    And I create new file with name "NewFile"
    Then I see file with name "NewFile"
@desktop @ignore
Scenario: Create new branch in repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1_rename" 
    And I create new branch with name "newBranch"
    Then I see new branch with name "newBranch"

@desktop @mobile
Scenario: Delete repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1_rename"
    When I choose "Setting" tab menu
	And I delete repository with name "Test1_rename"
	Then I don't see repository with name "Test1_rename"
