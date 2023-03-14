"""create user table

Revision ID: fc46febd5825
Revises: 
Create Date: 2023-02-13 10:28:27.024074

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fc46febd5825'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "user",
        sa.Column("id",sa.Integer,primary_key=True),
        sa.Column("name", sa.String(20), nullable = False),
        sa.Column("email", sa.String(20), nullable = False,unique=True),
        sa.Column("password", sa.String(20), nullable = False),
    )


def downgrade() -> None:
    op.drop_table("user")
