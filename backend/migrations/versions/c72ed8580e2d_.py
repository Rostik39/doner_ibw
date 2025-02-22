"""empty message

Revision ID: c72ed8580e2d
Revises: 4b48d69381fb
Create Date: 2025-02-12 11:27:16.692405

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c72ed8580e2d'
down_revision = '4b48d69381fb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('admin',
               existing_type=sa.BOOLEAN(),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('admin',
               existing_type=sa.BOOLEAN(),
               nullable=True)

    # ### end Alembic commands ###
