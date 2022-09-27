// step 1: import
import React from "react"
import Table from "react-bootstrap/Table"

// step 2: define and export
export function MembershipTable() {
  return (
    <Table responsive className="table_benefits">
      <thead>
        <tr>
          <th width="25%">Benefits</th>
          <th width="25%">
            <div>
              <img src="/icons/club_starter.png" alt="Starter" />
            </div>
            Starter
            <div className="font_membership">Free to Join</div>
          </th>
          <th width="25%">
            <div>
              <img src="/icons/club_insider.png" alt="Insider" />
            </div>
            Insider
            <div className="font_membership">Earn 1,200 Points</div>
          </th>
          <th width="25%">
            <div>
              <img src="/icons/club_creator.png" alt="Creator" />
            </div>
            Creator
            <div className="font_membership">Earn 5,000 Points</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Welcome Gift (10% off first purchase)</td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
        </tr>
        <tr>
          <td>Member-Only Sales</td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
        </tr>
        <tr>
          <td>15% OFF Storewide on Birthday Month</td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
        </tr>
        <tr>
          <td>Exclusive Preview for Launches</td>
          <td>&nbsp;</td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
        </tr>
        <tr>
          <td>Exclusive Content and Interior Styling Tips</td>
          <td>&nbsp;</td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
        </tr>
        <tr>
          <td>Special Birthday Gift</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
        </tr>
        <tr>
          <td>Invitation to M.INT Events and Workshops</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>
            <img src="icons/color_blue_membership.png" alt="Yes" />
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
