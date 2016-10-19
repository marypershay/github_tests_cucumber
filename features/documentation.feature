Feature: GitHub tests
As a user
I can doing smth

  Scenario: Log in
    Given user navigates to "https://github.com/"
	When user logs in using Username as "test.acc.helper@gmail.com" and Password "12qwASzx"
	Then login should be successful


  Scenario: Create repository
    Given user choose menu "New repository"
	When user create new repository
	Then repository will be create

