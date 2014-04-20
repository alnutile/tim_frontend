@javascript
Feature: Person CRUD
    Background: Refresh page
      Given I am on "#/dashboard/matters"

    Scenario: Can Edit a person
      Given I am on "#/dashboard"
      And I press the element "li#witnesses a"
      Then I should see "Foster Simmons"
      And I press the element "i.person_0"
      And I wait
      And I fill in "first_name" with "My Edit"
      And I fill in "bday" with "04/01/1950"
      And I press "Update Person"
      And I should see "My Edit"

# The type ahead is super hard to press/click/select
#     Scenario: Can add existing person
#      Given I am on "#/dashboard"
#      And I press the element "li#witnesses a"
#      And I press "add_person"
#      And I wait
#      And I fill in "existing_people" with "Turner "
#      And I wait
#      And I wait
#      And I press the element "body > div.modal.fade.in > div > div > div.modal-body.ng-scope > div > form > div > ul > li:nth-child(2)"
#      And I press "submit_existing_person"
#      And I wait
#      Then I should see "Turner Gay"

    Scenario: Can add a person
      Given I am on "#/dashboard"
      And I press the element "li#witnesses a"
      And I press "add_person"
      And I wait
      And I fill in "first_name" with "TedTalks"
      And I fill in "bday" with "01/01/1970"
      And I fill in "person_email" with "me@me.com"
      And I press "submit_new_person" 
      Then I should see "TedTalks"
