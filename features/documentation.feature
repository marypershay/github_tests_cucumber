Feature: GitHub tests
As a user
I can doing smth

Scenario: Log in
    Given I navigates to "https://github.com/"
	When I logs in using Username as "test.acc.helper@gmail.com" and Password "12qwASzx"
	Then login should be successful as "testacchelper"


Scenario: Create repository
	Given I navigates to "https://github.com/"
   	When I choose menu "New repository"
	When I create new repository with name "Test1"
	Then repository created

Scenario: Rename repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1"
    When I choose "Setting" tab menu
    And I rename repository to name "Test1_rename"
    Then repository renamed 

Scenario: Create file in repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1" 
    And I want to create new file with name "NewFile"

Scenario: Delete repository
    Given I navigates to "https://github.com/"
    When I choose repository with name "Test1_rename"
    When I choose "Setting" tab menu
	And I delete repository with name "Test1_rename"
	Then repository with name "Test1_rename" deleted

