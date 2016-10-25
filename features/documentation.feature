Feature: GitHub tests
As a user
I can doing smth

#Background: Log in
#    Given I navigates to "https://github.com/"
#    When I click on Sign In button
#	And I logs in using Username as "test.acc.helper@gmail.com" and Password "12qwASzx"
#	Then login should be successful as "testacchelper"

Scenario: Create repository
	Given I navigates to "https://github.com/"
    When I choose menu "New repository"
	When I create new repository with name "Test1"
	Then I see repository with name "Test1"

Scenario: Rename repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1"
    When I choose "Setting" tab menu
    And I rename repository to name "Test1_rename"
    Then I see repository with name "Test1_rename"

Scenario: Create file in repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1_rename" 
    And I create new file with name "NewFile"
    Then I see file with name "NewFile"

Scenario: Create new branch in repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1_rename" 
    And I create new branch with name "newBranch"
    Then I see new branch with name "newBranch"


Scenario: Delete repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1_rename"
    When I choose "Setting" tab menu
	And I delete repository with name "Test1_rename"
	Then I don't see repository with name "Test1_rename"

Scenario: Find "Font-Awesome" repository using Explore GitHub 
    When I navigates to "https://github.com/"
    And I choose Explore GitHub
    When I choose "Made in Africa" category
    And I choose "bootstrap-tour" repository
    Then I see repository with name "bootstrap-tour"